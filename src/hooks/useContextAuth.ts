import {AuthContext } from "../Context/AuthContext";
import { useContext } from "react";


export const useAuthContext=()=>useContext(AuthContext)