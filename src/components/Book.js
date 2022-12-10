import { useLocation } from "react-router-dom"

export default function Book(){
    const location= useLocation();
    const book = location.state.book

    return(
        <div>book</div>
    )
}
