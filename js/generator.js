var proof_template = window.atob("PGh0bWwgbGFuZz0iZW4iPgoKPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Imh0dHBzOi8vbGFpbnNhZmUuZGVsZWdhby5tb2UvZmlsZXMvcVBwQVdQeGsvcHJvb2YuY3NzIj4KICAgIDx0aXRsZT5QYXlwYWwgUHJvb2YgR2VuZXJhdG9yPC90aXRsZT4KPC9oZWFkPgo8c3R5bGU+CiAgKiB7CiAgICBvdmVyZmxvdzogaGlkZGVuOwogIH0KPC9zdHlsZT4KPGJvZHk+CiAgICA8ZGl2IGNsYXNzPSJwYXlvdXQiPgogICAgICAgIDxpbWcgc3JjPSJodHRwczovL2xhaW5zYWZlLmRlbGVnYW8ubW9lL2ZpbGVzL3V0T2xNUGN1L3BheXBhbF9jb25maXJtZWQucG5nICI+CgogICAgICAgIDxicj48YnI+CgogICAgICAgIDxwPllvdSd2ZSBzZW50IHt7QU1PVU5UfX0gdG8ge3tSRUNFSVZFUn19PC9wPgoKICAgICAgICA8YnI+PGJyPjxicj4KCiAgICAgICAgPGRpdiBjbGFzcz0iaGVhZGVyX19uYXYtLXJpZ2h0Ij4KICAgICAgICAgICAgPGRpdiBjbGFzcz0icHJvZmlsZV9fY29udGFpbmVyIj4KICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9IndpZHRoOiA1MCU7IGhlaWdodDogOCU7IGZvbnQtc2l6ZTogMThweDsiIGhyZWY9IiMiIGNsYXNzPSJjc3MtMXFsdzZqbCB2eF9idG4gdnhfYnRuLWJsb2NrIj5TZW5kIE1vcmUgTW9uZXk8L2E+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxhPjxiPkdvIHRvIFN1bW1hcnk8L2I+PC9hPgo8L2JvZHk+Cgo8L2h0bWw+");

generate_proof = () => {
    const amount = document.getElementById("amount").value
    const currency = document.getElementById("currency").value
    const receiver = document.getElementById("receiver").value

    let amountstr = '';

    switch (currency) {
        case "EUR":
            amountstr = `€${amount} EUR`;
            break;
        case "USD":
            amountstr = `$${amount} USD`;
            break;
        case "CAD":
            amountstr = `${amount} CAD`;
            break;
        default:
            amountstr = `$${amount} USD`
    }

    document.write(proof_template.replace("{{AMOUNT}}", amountstr).replace("{{RECEIVER}}", receiver))
}
