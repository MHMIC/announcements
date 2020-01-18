import React, { useState } from 'react'
import Layout from '../components/reusable/layout/layout'
import PodcastForm from '../components/page/yba/podcast-form/podcast-form'

const Yba = () => {
  const [input, setInput] = useState({
    title: '',
    link: ''
  });
  const handleChange = (event) => {
    const newInput = input;
    newInput[event.target.name] = event.target.value;
    setInput({
      ...newInput
    }); 
  }
  return (
    <Layout>
      <PodcastForm 
        input={input}
        handleChange={handleChange}
      />
    </Layout>
  )
}

export default Yba
