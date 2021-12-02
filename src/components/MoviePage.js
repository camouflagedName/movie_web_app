import '../App.css';
import React from "react";
import { useLocation } from 'react-router';
import { Title } from './Title.jsx';
import { Body } from './Body';



export default function MoviePage() {
  let location = useLocation();

  return (
    <>
        <Title data={location.state} />
        <Body data={location.state} />
    </>
  );
}


