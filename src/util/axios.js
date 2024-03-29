export const axios = {
    get(url) {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', url, true)

            xhr.onreadystatechange = () => {
                if (xhr.status == 200 && xhr.readyState == 4) {
                    setTimeout(() => {
                        resolve(JSON.parse(xhr.responseText))
                    }, 2000)
                }
            }
            xhr.send(null)
        })
    }

}