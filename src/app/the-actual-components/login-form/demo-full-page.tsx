"use client";

import LoginForm from '@/app/the-actual-components/login-form/LoginForm'

export default function LoginFormDemo() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '36px',
        justifyContent: 'center',
      }}
    >
      {/* 1. Default, no icon background */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
        <span
          style={{
            color: '#aaa',
            fontSize: '14px',
            marginBottom: '12px',
            fontWeight: 500,
            letterSpacing: '0.01em'
          }}
        >
          No icon outline
        </span>
        <LoginForm
          cardOutlineStyle="double-radius"
          iconUrl="https://raw.githubusercontent.com/Northstrix/namer-ui/refs/heads/main/screenshots/456x456px-logo.png"
          iconOutlineWidth="0px"
          iconPadding="0px"
          iconBackground="none"
          onSubmit={data => alert(JSON.stringify(data, null, 2))}
        />
      </div>

      {/* 2. Hebrew, custom color, no rounding */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
        <span
          style={{
            color: '#aaa',
            fontSize: '14px',
            marginBottom: '12px',
            fontWeight: 500,
            letterSpacing: '0.01em'
          }}
        >
          RTL, custom colors, no rounding, custom width
        </span>
        <LoginForm
          mode="signup"
          cardOutlineStyle="single-radius"
          cardRounding="0px"
          cardBorderWidth="2px"
          iconUrl="https://raw.githubusercontent.com/Northstrix/blueberry-loom/refs/heads/main/public/icon.webp"
          iconHref="https://blueberry-loom.netlify.app/"
          iconBackground="#fff"
          iconRounding="0px"
          iconOutlineWidth="2px"
          iconOutlineEnabled={true}
          floatingLabelInputProps={{
            accentColor: "#fff",
            inputFocusOutlineColor: "#7c3aed",
            outlineWidth: "2px",
            foregroundColor: "#fff",
            mutedForegroundColor: "#aaa",
            rounding: "0px",
            inputPadding: "16px",
            inputFontSize: "1.1rem",
            labelFontSize: "1.1rem",
            labelActiveFontSize: "13px",
            labelPadding: "0 8px",
            labelActivePadding: "0 7px",
            inputHeight: "48px",
          }}
          chronicleButtonProps={{
            hoverColor: "#7c3aed",
            hoverForeground: "#fff",
            borderRadius: "0px",
          }}
          buttonRounding="0px"
          titleFontSize="2.15rem"
          titleFontWeight={700}
          subtitleFontSize="1.01rem"
          subtitleFontWeight={500}
          switchFontSize="1.08rem"
          switchFontWeight={500}
          isRTL={true}
          logInTop="שלום!"
          register="וולקום!"
          signInToYourAccount="התחבר לחשבון שלך"
          createAnAccount="צור חשבון"
          emailLabel="אימייל"
          passwordLabel="סיסמה"
          confirmPasswordLabel="אשר סיסמה"
          noAccount="אין לך חשבון? "
          createOne="צור אחד"
          alreadyHaveAccount="כבר יש לך חשבון? "
          logInBottom="התחבר"
          loginButtonLabel="התחבר"
          registerButtonLabel="הירשם"
          switchToSignupLabel="צור אחד"
          switchToSigninLabel="התחבר"
          switchLinkHoverColor="#fff"
          containerStyle={{
            maxWidth: "340px"
          }}
          onSubmit={data => alert(JSON.stringify(data, null, 2))}
        />
      </div>

      {/* 3. Custom color, custom rounding */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
        <span
          style={{
            color: '#aaa',
            fontSize: '14px',
            marginBottom: '12px',
            fontWeight: 500,
            letterSpacing: '0.01em'
          }}
        >
          Custom colors, custom rounding, custom width
        </span>
        <LoginForm
          cardOutlineStyle="single-radius"
          cardRounding="18px"
          cardBorderWidth="2px"
          cardBorderColor="#00a0d8"
          cardHoverBorderColor="#7c3aed"
          cardBackground="#fff"
          iconUrl="https://raw.githubusercontent.com/Northstrix/blueberry-loom/refs/heads/main/public/icon.webp"
          iconHref="https://blueberry-loom.netlify.app/"
          iconOutlineEnabled={true}
          iconOutlineColor="#00a0d8"
          iconOutlineWidth="2px"
          iconHoverOutlineColor="#7c3aed"
          iconBackground="#fff"
          floatingLabelInputProps={{
            accentColor: "#222",
            parentBackground: "#fff",
            inputOutlineColor: "#00a0d8",
            inputFocusOutlineColor: "#7c3aed",
            outlineWidth: "2px",
            foregroundColor: "#222",
            mutedForegroundColor: "#666",
            rounding: "10px",
            inputPadding: "18px",
            inputFontSize: "1.12rem",
            labelFontSize: "1.12rem",
            labelActiveFontSize: "13px",
            labelPadding: "0 10px",
            labelActivePadding: "0 9px",
            inputHeight: "52px",
          }}
          chronicleButtonProps={{
            customBackground: "#00a0d8",
            customForeground: "#fff",
            hoverColor: "#7c3aed",
            hoverForeground: "#fff",
            borderRadius: "10px",
            fontSize: "1.12rem",
            fontFamily: "inherit",
          }}
          buttonRounding="10px"
          titleFontSize="2.3rem"
          titleFontWeight={800}
          subtitleFontSize="1.08rem"
          subtitleFontWeight={500}
          switchFontSize="1.08rem"
          switchFontWeight={500}
          logInTop="Light Login"
          register="Light Register"
          signInToYourAccount="Sign in to your light account"
          createAnAccount="Create a light account"
          loginButtonLabel="Sign in"
          registerButtonLabel="Sign up"
          switchToSignupLabel="Sign up here"
          switchToSigninLabel="Sign in here"
          titleColor="#1a1a1a"
          subtitleColor="#444"
          switchColor="#00a0d8"
          switchLinkHoverColor="#7c3aed"
          containerStyle={{
            maxWidth: "414px"
          }}
          onSubmit={data => alert(JSON.stringify(data, null, 2))}
        />
      </div>
    </div>
  );
}
