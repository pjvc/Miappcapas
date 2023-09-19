using Microsoft.AspNetCore.Mvc;
using CapaNegocios;
using CapaEntidad;
namespace Miappcapas.Controllers
{
    public class TipoMedicamentoController : Controller
    {
        public IActionResult Index()
        {
            
            return View();
        }
        public IActionResult Inicio()
        {
            return View();
        }
        public IActionResult SinMenu()
        {
            return View();
        }
        //string 
        public string saludo()
        {
            return "Hola que tal";
        }
        public string saludarnombre(string nombre)
        {
            return "Biemvenido" + nombre;
        }
        public string saludarnombreapellido(string nombre, string apellido)
        {
            return "Biemvenido" + nombre+" "+apellido;
        }
        public int numeroentero()
        {
            return 10;
        }
        public double numerodecimal()
        {
            return 5.5;
        }
        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            return obj.listaMedicamentos();
        }
    }
}
