﻿using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly PruebaContext _context;

        public UserController(ILogger<UserController> logger, PruebaContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUserDetails()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<User>> InsertUser(User userDetail)
        {
            _context.Users.Add(userDetail);
            await _context.SaveChangesAsync();
            InsertActividad(userDetail.Id, "Creación de usuario");
            return CreatedAtAction("GetUserDetail", new { id = userDetail.Id }, userDetail);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserDetail(int id)
        {
            var userDetail = await _context.Users.FindAsync(id);
            if (userDetail == null)
            {
                return NotFound();
            }
            return userDetail;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            try
            {
                var userDetail = await _context.Users.FindAsync(id);
                if (userDetail == null)
                {
                    return NotFound();
                }
                _context.Users.Remove(userDetail);
                await _context.SaveChangesAsync();
                InsertActividad(userDetail.Id, "Eliminacion de usuario");
            }
            catch
            {
                throw;
            }
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentDetail(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            _context.Entry(user).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();

                InsertActividad(id, "Actualización de Usuario");
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetUserDetail", new { id = user.Id }, user);
        }
        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
        private async void InsertActividad(int id, string userAction)
        {
            try
            {
                Actividad actividad = new Actividad();
                actividad.CreateDate = DateTime.Today;
                actividad.IdUsuario = id;
                actividad.Actividad1 = userAction;
                _context.Actividades.Add(actividad);
                await _context.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }
    }
}
