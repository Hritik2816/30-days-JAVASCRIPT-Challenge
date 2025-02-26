document.addEventListener('DOMContentLoaded', function () {
  const student_detail = JSON.parse(localStorage.getItem('student_detail')) || []

  const stu_name = document.querySelector('#student_name')
  const stu_roll = document.querySelector('#roll_no')
  const stu_address = document.querySelector('#address')
  const stu_email = document.querySelector('#email')
  const stu_contact = document.querySelector('#contact')

  const submit_btn = document.querySelector('.submit_button')

  submit_btn.addEventListener('submit', (e) => {
    e.preventDefault()
    const student = {
      name: stu_name.value.trim(),
      roll: stu_roll.value.trim(),
      address: stu_address.value.trim(),
      email: stu_email.value.trim(),
      contact: stu_contact.value.trim()
    }

    student_detail.push(student)
    localStorage.setItem('student_detail', JSON.stringify(student_detail))
    console.log(student_detail)
  })

})