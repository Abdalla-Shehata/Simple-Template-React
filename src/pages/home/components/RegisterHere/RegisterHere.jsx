import { ColoredTitle, FormWrapper, RegisterButton, RegisterContainer, RegisterHereWrapper, RegisterInput, SubText, Text, Title } from "./style";

export default function RegisterHere() {
    return (
        <RegisterHereWrapper>
            <div className="container">
                <RegisterContainer>
                    <div style={{ width: "60%" }}>
                        <Title>Register</Title>
                        <ColoredTitle> Here</ColoredTitle>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
                            autem cupiditate error ducimus facilis sapiente possimus minima.
                        </Text>
                        <SubText>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Non nihil facilis repudiandae sunt, voluptatum minima maiores
                            tempora eveniet adipisci, molestiae sapiente laudantium explicabo,
                            corrupti doloribus saepe amet!
                        </SubText>
                    </div>
                    <FormWrapper style={{ width: "35%" }}>
                        <RegisterInput type="text" placeholder="First Name" name="" id="" />
                        <RegisterInput type="text" placeholder="Last Name" name="" id="" />
                        <RegisterInput type="number" placeholder="Phone Number" name="" id="" />
                        <RegisterInput type="email" placeholder="Contact E-mail" name="" id="" />

                        <RegisterButton>Register</RegisterButton>
                    </FormWrapper>
                </RegisterContainer>
            </div>
        </RegisterHereWrapper>
    )
}
