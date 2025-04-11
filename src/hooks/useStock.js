import { StockContext } from "../contexts/StockContexts";
import { useContext } from "react";

export default function useStock(){
    return useContext(StockContext)
}