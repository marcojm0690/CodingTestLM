using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Backend.Models;

public partial class User
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public DateTime DateOfBirth { get; set; }

    public string? Telephone { get; set; }

    public string Country { get; set; } = null!;

    public bool Contact { get; set; }
    [JsonIgnore]
    public virtual ICollection<Actividad> Actividades { get; } = new List<Actividad>();
}
