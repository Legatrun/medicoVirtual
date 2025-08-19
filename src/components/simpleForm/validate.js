const validate = (values) => {
  const errors = {};

  if (
    !values.headache &&
    !values.fever &&
    !values.cough &&
    !values.otherSymptoms
  ) {
    errors.symptoms = "Debes seleccionar al menos un síntoma o describir otros";
  }

  if (!values.painLevel) {
    errors.painLevel = "El nivel de dolor es requerido";
  }

  return errors;
};

export default validate;
