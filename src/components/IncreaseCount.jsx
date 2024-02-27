import React, { useState } from 'react'

const IncreaseCount = ({render}) => {
    const[count, setCount] = useState(0)
    const handleChange = () => {
        setCount(count + 1)
    }
    return render({count, handleChange})
}

export default IncreaseCount
