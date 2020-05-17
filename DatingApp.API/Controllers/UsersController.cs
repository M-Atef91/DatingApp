using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using DatingApp.API.DTOs;

namespace DatingApp.API.Controllers
{
    //[Authorize]
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
            var users = await _datingAppService.GetAllUsers();
            var usersDisplay = _mapper.Map<ICollection<UserForListDto>>(users);
            return Ok(usersDisplay);
        }
        
        [HttpGet("{action}/{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _datingAppService.GetUser(id);
            var userDisplay = _mapper.Map<UserForDetailsDto>(user);

            return Ok(userDisplay);
        } 

    }
}
