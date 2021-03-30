using System;
using System.Collections.Generic;

#nullable disable

namespace Segundo_Parcial.Models
{
    public partial class Robo
    {
        public int Id { get; set; }
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public DateTime? Fecha { get; set; }
        public string Que { get; set; }
        public double? Valor { get; set; }
        public string Donde { get; set; }
        public double? Lat { get; set; }
        public double? Lgn { get; set; }
    }
}
