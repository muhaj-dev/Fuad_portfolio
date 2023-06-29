'use client';

import { useState, useEffect } from "react";

const useProfile = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(true)
    return { isOpen, setIsOpen }

}

export default useProfile;