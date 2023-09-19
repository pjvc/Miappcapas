namespace CapaNegocios;
using CapaDatos;
using CapaEntidad;

    public class TipoMedicamentoBL
    {
        public List<TipoMedicamentoCLS> listaMedicamentos()
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.listaMedicamentos();
        }
    }
