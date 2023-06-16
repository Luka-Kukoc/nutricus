import React from 'react'
import { supabase } from '../utils/supabaseClient'
import { useEffect, useState } from 'react'

const Meals = ({ meals }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('/api/meals')
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])
  console.log(data)
  return <div>meals</div>
}

export default Meals
