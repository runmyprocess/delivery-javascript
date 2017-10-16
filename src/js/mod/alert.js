import swal from 'sweetalert'

/**
 * Display an alert message.
 * @param   {string} title - The title of the modal.
 * @param   {string} text  - A description for the modal.
 * @param   {string} type  - The type of the modal. You can choose between five built-in types which will show a corresponding icon animation: warning, error, success, info, question.
 * @returns {html} - Display the alert message.
 */
export function alert (title, text, type) {
  return swal({
    title: title,
    text: text,
    type: type,
    confirmButtonText: 'Ok'
  })
}
