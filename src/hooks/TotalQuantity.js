import { useState } from "react"

export const useTotalQuantity = () => {
    const [grandTotalQuantity, setGrandTotalQuantity] = useState();
    return {
        grandTotalQuantity,
        setGrandTotalQuantity
    }
}
