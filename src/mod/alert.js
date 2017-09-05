import swal from 'sweetalert'

export function show (title, text, type) {
  return swal({
    title: title,
    text: text,
    type: type,
    confirmButtonText: 'Ok'
  })
}
