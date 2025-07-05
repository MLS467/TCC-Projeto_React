// Utilitário para garantir valores válidos de patient_condition
export const PATIENT_CONDITIONS = {
  MILD: "mild",
  MODERATE: "moderate",
  SERIOUS: "serious",
  CRITICAL: "critical",
};

export const VALID_CONDITIONS = Object.values(PATIENT_CONDITIONS);

/**
 * Garante que o patient_condition sempre tenha um valor válido
 * @param {string} condition - Condição do paciente
 * @returns {string} Condição válida ou 'mild' como padrão
 */
export const ensureValidPatientCondition = (condition) => {
  if (!condition || typeof condition !== "string") {
    return PATIENT_CONDITIONS.MILD;
  }

  const normalizedCondition = condition.toLowerCase().trim();

  if (VALID_CONDITIONS.includes(normalizedCondition)) {
    return normalizedCondition;
  }

  return PATIENT_CONDITIONS.MILD;
};

/**
 * Valida se uma condição é válida
 * @param {string} condition - Condição a ser validada
 * @returns {boolean} True se válida, false caso contrário
 */
export const isValidPatientCondition = (condition) => {
  return VALID_CONDITIONS.includes(condition);
};
