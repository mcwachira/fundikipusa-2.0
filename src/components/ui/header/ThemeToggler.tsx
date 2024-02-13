"use client";

import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import Button from '@/src/components/ui/Button'

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const {resolvedTheme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, []);

  if(!mounted){
    return null
  }

  const toggleDarkMode = () => {
    const newTheme = resolvedTheme === 'dark'? "light": "dark"
    setTheme(newTheme)

    //store theme in cookie
    document.cookie = `theme=${newTheme}; path=/`;
  }

  return (
      <Button onClick={toggleDarkMode} className="flex items-center focus:outline-none">
        {resolvedTheme === 'dark' ? (
            <div className="mr-2 text-4xl text-[#4a576E]"><RiSunLine/></div>
        ) : (
            <div className="mr-2 text-4xl text-gray-700">
              <span className="text-[#4a576E]"><RiMoonClearLine/></span>
            </div>
        )}
      </Button>
  )

}
export default ThemeToggler