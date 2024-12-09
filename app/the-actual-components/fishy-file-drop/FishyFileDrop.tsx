"use client"
import React, { useState, useRef, useCallback, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const wave1 = keyframes`
  0%  { clip-path: path('M140.44,0c-12.81,1.3-12.59,12.11-35.96,10.7-14.56-.88-16.21,19.13-40.12,10.57-17.84-6.39-37.9-1.86-49.13,10.03C2.01,45.31,3.29,51.05,0,65.19H140.44V0Z'); }
  100%{ clip-path: path('M140.44,0c-17.21,3.05-17.35,17.42-35.08,14.77-16.69-2.49-23.72-6.62-50.13,7.7-13.98,7.58-26.83-2.25-39.76,8.45C4.54,39.98,3.29,48.5,0,62.64H140.44V0Z'); }
`;

const wave2 = keyframes`
  0%  { clip-path: path('M137.15,.03c-16.75-.44-27.29,4.77-33.69,10.72-6.4,5.96-24.52,19.73-43.08,9.17-13.1-7.46-26.74-3.14-38.25,4.78C6.61,35.38,3.74,44.74,0,59.63H137.15V.03Z'); }
  100%{ clip-path: path('M137.15,0c-17.21,10.16-17.24,10.78-37.72,9.6-14.61-.84-20.22,16.56-38.49,12.08-14.89-3.65-18.21,9.53-31.75,6.88C10.69,24.95,3.74,44.71,0,59.6H137.15V0Z'); }
`;

const wave3 = keyframes`
  0%  { clip-path: path('M132.61,0c-9.18,3.92-11.29,5.2-19.97,4.19-9.33-1.09-10.97,12.29-25.37,15.53-9.69,2.18-17.12-7.15-28.89-5.37-15.68,2.38-16.35,7.79-29.01,9.38C4.37,26.86-.79,50.3,.09,54.49H132.61V0Z'); }
  100%{ clip-path: path('M132.58,0c-3.02,8.29-13.7,3.05-21.15,10.78-6.52,6.76-10.8,3.72-29.64,3.97-9.93,.13-15.11,7.85-26.94,9.14-10.81,1.18-15.58-4.27-28.13-1.99C8.04,25.29-.82,50.3,.06,54.49H132.58V0Z'); }
`;

const wave4 = keyframes`
  0%  { clip-path: path('M128.7,.2c-16.75-.44-23.99-.69-30.39,5.26-6.4,5.96-8.68,12.19-26.99,7.33-9.6-2.54-24.02-4.44-34.16,2.33-10.83,7.23-14.87,9.49-22.83,10.33C1.59,26.81-.72,39.73,.17,43.92H128.7V.2Z'); }
  100%{ clip-path: path('M128.53,0c-13.22,12-19.04,5.96-27.62,4.3-12.9-2.5-14.51,2.69-29.7,10.84-8.75,4.7-15.33,2.81-28.21-.3-15.44-3.72-19.2,7.95-29.03,11.04C4.72,28.8,.76,37.83,0,43.72H128.53V0Z'); }
`;

const shadow = keyframes`
  0%{ filter: drop-shadow(0 0 3px rgba(10, 60, 90, 0.8)); }
  100%{ filter: drop-shadow(0 0 20px rgba(10, 60, 90, 0.7)); }
`;

const fish = keyframes`
  0%  {
    top: -80px;
    right: -20px;
    transform: rotate(0);
    clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z');
  }
  10% {
    clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z');
  }
  20% {
    clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z');
  }
  30% {
    clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z');
  }
  40% {
    clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z');
  }
  50% {
    clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z');
  }
  60% {
    clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z');
  }
  70% {
    clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z');
  }
  80% {
    clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z');
  }
  90% {
    clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z');
  }
  100% {
    top: 100px;
    right: 80px;
    transform: rotate(40deg);
    clip-path: path('M17.92,14.38c1.77-4.98,5.6-8.82,5.7-14.38-4.05,6.12-5,3.31-8.12,6-2.63-1.74-6.8,1.19-9.75-2.12,.35,5.4,6.79,7.43,8.26,12.02,0,0,.86,10.01-6.97,23.52-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-8.58,20.98,.12,30.85,2.94,3.34,19.34-10.13,18.67-25.45,5.49-4.79,5.92-9.94,9.63-14.03-1.67,.35-6.84,4.82-9.88,6.29,.14-12.63-4.09-23.04-4.42-29.33Z');
  }
`;

const bubble = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(5px, 0); }
`;

const Wave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 3px rgba(10, 60, 90, 0.8));
  &:nth-child(1) { z-index: 1; }
  &:nth-child(2) { z-index: 2; }
  &:nth-child(3) { z-index: 3; }
  &:nth-child(4) { z-index: 5; }
  &::before, &::after {
    content: '';
    position: absolute;
    width: 140px;
    height: 65px;
    background: var(--color_1);
    clip-path: path('M140.44,0c-12.81,1.3-12.59,12.11-35.96,10.7-14.56-.88-16.21,19.13-40.12,10.57-17.84-6.39-37.9-1.86-49.13,10.03C2.01,45.31,3.29,51.05,0,65.19H140.44V0Z');
    animation: ${wave1} linear 3s infinite alternate;
  }
  &:nth-child(1)::before, &:nth-child(2)::before, &:nth-child(3)::before, &:nth-child(4)::before {
    transform: rotate(180deg);
    transition: all ease .8s;
  }
  &:nth-child(1)::after, &:nth-child(2)::after, &:nth-child(3)::after, &:nth-child(4)::after {
    transition: all ease .8s;
  }
  &:nth-child(1)::before { top: -16px; left: -16px; }
  &:nth-child(2)::before { top: -20px; left: -20px; }
  &:nth-child(3)::before { top: -20px; left: -20px; }
  &:nth-child(4)::before { top: -20px; left: -20px; }
  &:nth-child(1)::after { bottom: -16px; right: -16px; }
  &:nth-child(2)::after { bottom: -20px; right: -20px; }
  &:nth-child(3)::after { bottom: -20px; right: -20px; }
  &:nth-child(4)::after { bottom: -20px; right: -20px; }
  &:nth-child(2)::before, &:nth-child(2)::after {
    width: 137px;
    height: 60px;
    background: var(--color_2);
    clip-path: path('M137.15,.03c-16.75-.44-27.29,4.77-33.69,10.72-6.4,5.96-24.52,19.73-43.08,9.17-13.1-7.46-26.74-3.14-38.25,4.78C6.61,35.38,3.74,44.74,0,59.63H137.15V.03Z');
    animation: ${wave2} linear 3s infinite alternate;
  }
  &:nth-child(3)::before, &:nth-child(3)::after {
    width: 132px;
    height: 54px;
    background: var(--color_3);
    clip-path: path('M132.61,0c-9.18,3.92-11.29,5.2-19.97,4.19-9.33-1.09-10.97,12.29-25.37,15.53-9.69,2.18-17.12-7.15-28.89-5.37-15.68,2.38-16.35,7.79-29.01,9.38C4.37,26.86-.79,50.3,.09,54.49H132.61V0Z');
    animation: ${wave3} linear 3s infinite alternate;
  }
  &:nth-child(4)::before, &:nth-child(4)::after {
    width: 128px;
    height: 44px;
    background: var(--color_4);
    clip-path: path('M128.7,.2c-16.75-.44-23.99-.69-30.39,5.26-6.4,5.96-8.68,12.19-26.99,7.33-9.6-2.54-24.02-4.44-34.16,2.33-10.83,7.23-14.87,9.49-22.83,10.33C1.59,26.81-.72,39.73,.17,43.92H128.7V.2Z');
    animation: ${wave4} linear 3s infinite alternate;
  }
`;

const Fish = styled.div`
  position: absolute;
  z-index: 4;
  top: -80px;
  right: -20px;
  width: 52px;
  height: 78px;
  clip-path: path('M34.53,16.03c5.88-1.55,11.58,.46,16.58-2.77-8.2-.76-6.29-2.68-9.51-3.84,.25-2.73-4.57-5.35-3.07-9.43-4.36,3.06-2.05,8.99-6.07,13.57,0,0-17.91,9.39-25.74,22.9-2.04-2.67-3.76-8.1-5.1-9.25,1.19,5.05-.05,9.67,1.84,15.88-.03,.08-7.85,22.39,.12,30.85,3.05,3.24,15.5-12.58,18.03-25.6,5.49-4.79,6.56-9.79,10.27-13.88-1.67,.35-5.57,3.99-8.6,5.46,3.5-14.8,8.58-20.9,11.25-23.9Z');
  background: #fff;
  transition: all 0.3s ease;
`;

const ButtonTextWrapper = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ButtonText = styled.span`
  position: relative;
  display: inline-block;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 26px;
  font-weight: bold;
  padding: 27px;
  letter-spacing: 4px;
  color: #fff;
  z-index: 1;
  -webkit-text-stroke: 1px #6BC4FF;
  transition: all ease 1s;
`;

const Bubble = styled.div`
  position: absolute;
  z-index: 7;
  top: 0;
  width: 30px;
  height: 30px;
  &::before, &::after {
    content: '';
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    background: rgba(255,255,255,0);
  }
  &:nth-child(6) { left: 16px; }
  &:nth-child(7) { left: 48px; }
  &:nth-child(8) { right: 16px; }
  &:nth-child(9) { right: 48px; }
  &:nth-child(6)::before {
    width: 16px;
    height: 16px;
    left: 0;
    bottom: -60px;
    transition: all ease 3.7s;
  }
  &:nth-child(6)::after {
    width: 8px;
    height: 8px;
    right: 4px;
    bottom: -10px;
    transition: all ease 3.4s;
  }
  &:nth-child(7)::before {
    width: 10px;
    height: 10px;
    left: 0;
    bottom: -25px;
    transition: all ease 3.5s;
  }
  &:nth-child(7)::after {
    width: 14px;
    height: 14px;
    right: 0;
    bottom: -50px;
    transition: all ease 3.3s;
  }
  &:nth-child(8)::before {
    width: 16px;
    height: 16px;
    left: 0;
    bottom: -30px;
    transition: all ease 3.5s;
  }
  &:nth-child(8)::after {
    width: 8px;
    height: 8px;
    right: 4px;
    bottom: -70px;
    transition: all ease 3.3s;
  }
  &:nth-child(9)::before {
    width: 10px;
    height: 10px;
    left: 0;
    bottom: -40px;
    transition: all ease 3.6s;
  }
  &:nth-child(9)::after {
    width: 14px;
    height: 14px;
    right: 0;
    bottom: -15px;
    transition: all ease 3.7s;
  }
`;

const TextEffect = styled.span`
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: #6BC4FF;
  color: white;
  clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
  transform-origin: center;
  transition: all cubic-bezier(.1,.5,.5,1) 0.4s;
`;

const Button = styled.a`
  --color_1: #1b70a1;
  --color_2: #368cc1;
  --color_3: #50a8e0;
  --color_4: #6bc4ff;
  --color_5: #ffffff00;
  --color_6: #ffffff00;
  display: flex;
  z-index: 0;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  text-decoration: none;
  overflow: hidden;
  background: var(--color_5);
  transition: all ease .7s;
  &::before {
    content: '';
    position: absolute;
    z-index: 6;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:hover, &.active {
    background: var(--color_6);
    box-shadow: 0 0 24px rgba(0,0,0,0), 0 0 24px rgba(0,0,0,.8) inset;
  }
  &:hover .fish, &.active .fish {
    animation: ${fish} ease 4s;
  }
  &:hover ${Wave}, &.active ${Wave} {
    animation: ${shadow} ease 1s;
    animation-fill-mode: forwards;
  }
  &:hover ${ButtonText}, &.active ${ButtonText} {
    letter-spacing: 11px;
    font-size: 30px;
    -webkit-text-stroke: 0;
  }
  &:hover ${TextEffect}, &.active ${TextEffect} {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  &:hover ${Bubble}::before, &:hover ${Bubble}::after,
  &.active ${Bubble}::before, &.active ${Bubble}::after {
    background: rgba(255,255,255,.8);
  }
  &:hover ${Bubble}, &.active ${Bubble} {
    animation: ${bubble} linear .1s infinite alternate;
  }
`;

interface FishyFileDropProps {
  onFilesSelected: (files: FileList) => void;
}

const FishyFileDrop: React.FC<FishyFileDropProps> = ({ onFilesSelected }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFilesSelected(e.dataTransfer.files);
    }
  }, [onFilesSelected]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onFilesSelected(e.target.files);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const GlowingCard: React.FC<{ children: React.ReactNode, metadataIntegrity: boolean }> = ({ children, metadataIntegrity }) => {
    const cardRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const card = cardRef.current;
      if (!card) return;
  
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const angle = Math.atan2(-x, y);
        card.style.setProperty("--rotation", `${angle}rad`);
      };
  
      card.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    return (
      <div ref={cardRef} className="glowing-card">
        <div className="card-content">
          {children}
        </div>
        <style jsx>{`
          .glowing-card {
            --rotation: 2.5rad;
            position: relative;
            border-radius: 0.75rem;
            transition: box-shadow 0.2s;
            border: 2px solid transparent;
            background-origin: border-box;
            background-clip: padding-box, border-box;
            background-image: ${metadataIntegrity
              ? 'linear-gradient(black, black), linear-gradient(calc(var(--rotation)), #888 0, #444 20%, transparent 80%)'
              : 'repeating-linear-gradient(-45deg, #800000, #800000 10px, #000000 10px, #000000 20px), linear-gradient(calc(var(--rotation)), #888 0, #444 20%, transparent 80%)'
            };
          }
          .glowing-card:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
          .glowing-card::before, .glowing-card::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 0.75rem;
            padding: 2px;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            z-index: -1;
          }
          .glowing-card::before {
            background: linear-gradient(to right, #888, #444, transparent);
          }
          .glowing-card::after {
            background: black;
          }
          .card-content {
            width: 100%;
            height: 100%;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          * {
            color: white;
            font-size: 18px;
          }
          :global(body) {
            background-color: #050505;
          }
        `}</style>
      </div>
    );
  };

  return (
    <>
      <div className="w-[352px] h-[352px]">
        <div className="container">
          <GlowingCard metadataIntegrity={true}>
            <div 
              className="w-[320px] h-[320px] mx-auto rounded-lg flex items-center justify-center bg-[#005482]"
              style={{
                backgroundImage: "url('/ChristmasTreesPattern.png')",
                backgroundSize: "107px 107px",
                backgroundRepeat: "repeat"
              }}
            >
              <Button
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={onButtonClick}
                className={isDragActive ? 'active' : ''}
              >
                <input
                  ref={inputRef}
                  type="file"
                  multiple
                  onChange={handleChange}
                  style={{ display: 'none' }}
                />
                <Wave />
                <Wave />
                <Wave />
                <Fish className="fish" />
                <Bubble />
                <Bubble />
                <Bubble />
                <ButtonTextWrapper>
                  <ButtonText>
                    Add files
                    <TextEffect />
                  </ButtonText>
                </ButtonTextWrapper>
              </Button>
            </div>
          </GlowingCard>
        </div>
      </div>
    </>
  );
};

export default FishyFileDrop;