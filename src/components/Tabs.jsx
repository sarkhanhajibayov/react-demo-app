export default function Tabs({ children, content, ButtonContainer = "menu"
    
 }) {
  return (
    <>
      <ButtonContainer>{content}</ButtonContainer>
      {children}
    </>
  );
}
