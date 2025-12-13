'use client'

export default async function handleRequest({path, method = "GET", body, params, jwtToken, ref, setWarning, setModalVisible, setUploading}, request) {

    const warning = typeof setWarning === "function" ? true : false
    const modal = typeof setModalVisible === "function" ? true : false
    const uploading = typeof setUploading === "function" ? true : false

    const displayWarning = (message, success) => {
        if (warning) {
            setWarning({ text : message ? message : "Erreur : Problème de connexion", success : success ? success : false})
            setTimeout(() => setWarning({}), 4500);
        }
    }

    if (ref) {
        if (!ref.current) return;
        ref.current = false;
    }
    try {
        warning && setWarning({})
        uploading && setUploading(true)

        const url = process.env.NEXT_PUBLIC_BACK_ADDRESS;

        const headers = jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {};
        const options = { method, headers };

        if (body) {
            if (body instanceof FormData) {
                options.body = body;
            } else {
                headers["Content-Type"] = "application/json";
                options.body = JSON.stringify(body);
            }
        }

        const urlParams = params
            ? "/" + (Array.isArray(params) ? params.join("/") : params)
            : "";

        const data = await request(url, path, urlParams, options)

        if (data.error) {
            displayWarning(data.error)
        } else if (!data.result) {
            displayWarning()
        } else {
            data.successMsg && displayWarning(data.successMsg, true)
            return data
        }
    }
    catch (err) {
        console.log(`${path.toUpperCase()} FETCH HANDLE ERROR :`, err)
        displayWarning()
    }
    finally {
        if (ref) ref.current = true;
        uploading && setUploading(false)
        modal && setTimeout(() => setModalVisible(false), 4500)
    }
}