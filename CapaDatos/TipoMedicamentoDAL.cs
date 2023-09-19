namespace CapaDatos;
using CapaEntidad;


    public class TipoMedicamentoDAL
    {
        public List<TipoMedicamentoCLS> listaMedicamentos()
        {
            List<TipoMedicamentoCLS> lista = new List<TipoMedicamentoCLS>();
        lista.Add(new TipoMedicamentoCLS
        {
            idTipomedicamento = 1,
            nombre = "Paracetamol",
            descripcion = "Tomar 2 al dia",
        });
        lista.Add(new TipoMedicamentoCLS
        {
            idTipomedicamento = 2,
            nombre = "Omeprazol",
            descripcion = "Tomar 1 a la semana",
        });
        return lista;
        }
    }
