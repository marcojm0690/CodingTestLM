using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ActividadController : ControllerBase
    {
        private readonly ILogger<ActividadController> _logger;
        private readonly PruebaContext _context;

        public ActividadController(ILogger<ActividadController> logger, PruebaContext context)
        {
            _logger = logger;
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Actividad>>> GetActividadDetails()
        {
            return await _context.Actividades.Include(c=> c.UsuarioActividad).OrderByDescending(c=> c.CreateDate).ToListAsync();
        }
    }
}
