import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-blue-800 text-white p-3 flex justify-between items-center">
            <button onClick={() => navigate("/")} className="text-xl font-bold shadow-md p-2">SlimePay</button>
            <div className="bg-white h-10 w-10 rounded-full"></div>
        </div>
    )
}

export default Header
