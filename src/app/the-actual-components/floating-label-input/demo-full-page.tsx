
"use client";

import React, { useState } from 'react';
import FloatingLabelInput from '@/app/the-actual-components/floating-label-input/FloatingLabelInput';

export default function FloatingLabelInputDemo() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [info, setInfo] = useState('');

    return (
        <div
          style={{
            minHeight: 300,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '32px',
            boxSizing: 'border-box',
          }}
        >
          {/* Inputs row */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '32px',
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: '100%',
              maxWidth: 1440,
            }}
          >
            <div style={{ maxWidth: 260, minWidth: 180, flex: '1 1 180px', display: 'flex', alignItems: 'center' }}>
              <FloatingLabelInput
                label="Username"
                value={username}
                parentBackground="#0a0a0a"
                onValueChange={setUsername}
              />
            </div>
            <div style={{ maxWidth: 260, minWidth: 180, flex: '1 1 180px', display: 'flex', alignItems: 'center' }}>
              <FloatingLabelInput
                label="אימייל"
                value={email}
                parentBackground="#0a0a0a"
                isRTL
                onValueChange={setEmail}
                type="email"
                rounding="0px"
                inputHeight="72px"
                inputFontSize="1.5rem"
                labelFontSize="1.125rem"
                labelActiveFontSize="14px"
                foregroundColor="#fff"
                mutedForegroundColor="#aaa"
                accentColor="#a259ff"
              />
            </div>
            <div style={{ maxWidth: 260, minWidth: 180, flex: '1 1 180px', display: 'flex', alignItems: 'center' }}>
              <FloatingLabelInput
                label="Password"
                value={password}
                parentBackground="#0a0a0a"
                onValueChange={setPassword}
                type="password"
              />
            </div>
            <div style={{ maxWidth: 260, minWidth: 180, flex: '1 1 180px', display: 'flex', alignItems: 'center' }}>
              <FloatingLabelInput
                label="Additional Info"
                value={info}
                onValueChange={setInfo}
                parentBackground="#0a0a0a"
                inputOutlineColor="#707070"
                inputFocusOutlineColor="#00a0d8"
                outlineWidth="3px"
                rounding="10px"
                accentColor="#fff"
                foregroundColor="#00a0d8"
                mutedForegroundColor="#909090"
                labelActiveFontSize="15px"
                textarea={true}
              />
            </div>
          </div>
          {/* Labels column, stacked and centered below */}
          <div
            style={{
              marginTop: 32,
              color: "#fafafa",
              width: "100%",
              maxWidth: 340,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '0.96rem',
              alignItems: 'stretch',
            }}
          >
            <div>
              <strong>Username:</strong> {username || <span style={{ opacity: 0.5 }}>—</span>}
            </div>
            <div>
              <strong>Email:</strong> {email || <span style={{ opacity: 0.5 }}>—</span>}
            </div>
            <div>
              <strong>Password:</strong> {password || <span style={{ opacity: 0.5 }}>—</span>}
            </div>
            <div>
              <strong>Additional Info:</strong> {info || <span style={{ opacity: 0.5 }}>—</span>}
            </div>
        </div>
      </div>
    );
}
