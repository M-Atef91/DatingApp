using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Models;
using DatingApp.API.DTOs;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dst => dst.Age, opt =>
                {
                    opt.MapFrom(u => u.DateOfBirth.GetAge());
                })
                .ForMember(dest => dest.PhotoUrl, opt =>
                {
                    opt.MapFrom(x => x.Photos.FirstOrDefault(x => x.IsMain).Url);
                });
            CreateMap<User, UserForDetailsDto>()
                .ForMember(dst => dst.Age, opt =>
            {
                opt.MapFrom(u => u.DateOfBirth.GetAge());
            })
                .ForMember(dest => dest.PhotoUrl, opt =>
            {
                opt.MapFrom(x => x.Photos.FirstOrDefault(x => x.IsMain).Url);
            });
            CreateMap<Photo, PhotoDto>();
            CreateMap<UserforUpdateDto, User>();
        }
    }
}
