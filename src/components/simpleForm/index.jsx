import { useFormik } from "formik";
import validate from "./validate";

const SimpleForm = () => {
  const formik = useFormik({
    initialValues: {
      headache: false,
      fever: false,
      cough: false,
      painLevel: "",
      otherSymptoms: "",
    },
    validate,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      console.log(values);

      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Registro de Síntomas</h2>

      <div className="form-group">
        <label>Síntomas Comunes</label>
        <div className="checkbox-group">
          <label>
            <input
              name="headache"
              type="checkbox"
              onChange={formik.handleChange}
              checked={formik.values.headache}
            />
            Dolor de cabeza
          </label>
          <label>
            <input
              name="fever"
              type="checkbox"
              onChange={formik.handleChange}
              checked={formik.values.fever}
            />
            Fiebre
          </label>
          <label>
            <input
              name="cough"
              type="checkbox"
              onChange={formik.handleChange}
              checked={formik.values.cough}
            />
            Toss
          </label>
        </div>
      </div>

      {(formik.touched.cough ||
        formik.touched.headache ||
        formik.touched.fever) &&
        formik.errors.symptoms && (
          <div className="error">{formik.errors.symptoms}</div>
        )}

      <div className="form-group">
        <label htmlFor="otherSymptoms">Otros síntomas</label>
        <textarea
          id="otherSymptoms"
          name="otherSymptoms"
          onChange={formik.handleChange}
          value={formik.values.otherSymptoms}
        />
      </div>

      <div className="form-group">
        <label htmlFor="painLevel">Nivel de dolor (1 a 10)</label>
        <select
          id="painLevel"
          name="painLevel"
          onChange={formik.handleChange}
          value={formik.values.painLevel}
          style={{
            borderColor:
              formik.touched.painLevel && formik.errors.painLevel ? "red" : "",
          }}
        >
          <option value="" label="Selecciona un nivel" />
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        {formik.touched.painLevel && formik.errors.painLevel && (
          <div className="error">{formik.errors.painLevel}</div>
        )}
      </div>

      <button type="submit" disabled={formik.isSubmitting}>
        Registrar Síntomas
      </button>
    </form>
  );
};

export default SimpleForm;
