export const getName = () =>{
    
    const token = localStorage.getItem("token") || ""
    const tokenWithoutBearer = token.replace("Bearer ", "");
    const parts = tokenWithoutBearer?.split(".");
    const payload = parts[1]
    const decodedPayload = JSON.parse(atob(payload));
    const name = decodedPayload.name;

    return name;
}