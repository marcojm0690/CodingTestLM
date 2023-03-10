using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Backend.Models;

public partial class Actividad
{
    public int IdActividad { get; set; }

    public DateTime CreateDate { get; set; }

    public int IdUsuario { get; set; }

    public string DescripcionActividad { get; set; } = null!;
    
    public virtual User UsuarioActividad { get; set; } = null!;
}
