function calculateAge() {
  const birthdateInput = document.getElementById('birthdate');
  const resultDiv = document.getElementById('result');

  const birthdate = new Date(birthdateInput.value);
  const currentDate = new Date();

  const ageInMilliseconds = currentDate - birthdate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInMonths = ageInDays / 30.44; // Average days in a month
  const ageInYears = ageInMonths / 12;

  const years = Math.floor(ageInYears);
  const months = Math.floor(ageInMonths % 12);
  const days = Math.floor(ageInDays % 30.44);
  const hours = Math.floor(ageInHours % 24);

  resultDiv.innerHTML = `
    <p>Edad:</p>
    <p>${years} años, ${months} meses, ${days} días y ${hours} horas</p>
  `;
}
