﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using DatingApp.API.DTOs;
using System.Security.Claims;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IDatingAppService _datingAppService;

        public UsersController(IDatingAppService datingAppService,IMapper mapper)
        {
            _mapper = mapper;
            _datingAppService = datingAppService;
        }
        [Route("{action}")]
        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            int use =int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var users = await _datingAppService.GetAllUsers();
            var usersDisplay = _mapper.Map<ICollection<UserForListDto>>( users.Where(u=>u.Id != use));
            return Ok(usersDisplay);
        }
        
        [HttpGet("{action}/{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _datingAppService.GetUser(id);
            var userDisplay = _mapper.Map<UserForDetailsDto>(user);

            return Ok(userDisplay);
        } 
       
        [HttpPut("{action}/{id}")]
        public async Task<IActionResult> UpdateUser(int id,UserforUpdateDto updateDto){
            if (id!=int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            return Unauthorized();

            var user=await _datingAppService.GetUser(id);
            _mapper.Map(updateDto,user);
           
            if(await _datingAppService.SaveAll())
            return NoContent();
            throw new Exception("updating faild,,");

            
        }


    }
}
