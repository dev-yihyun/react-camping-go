import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../component/Button/Button";
import IconButton from "../../component/Button/IconButton";
import TabCard from "../../component/Card/TabCard";
import Input from "../../component/Input/Input";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";
import Space from "../../component/Layout/Space";
import Text from "../../component/Text/Text";
import Title from "../../component/Text/Title";
import { useFindId } from "./hook/useFindId";

function FindId() {
    const navigate = useNavigate();
    const {
        inputName,
        inputPhone,
        inputEmail,
        activeTab,
        resultMessage,
        setActiveTab,
        onInputName,
        onInputPhone,
        onInputEmail,
        isPhoneTabDisabled,
        isEmailTabDisabled,
        findIdByPhone,
        findIdByEmail,
    } = useFindId();

    const tabs = [
        {
            label: "PHONE",
            content: (
                <>
                    <FlexBox gap="8px">
                        <Space height={10} />
                        <Input
                            placeholder="NAME"
                            maxLength={16}
                            value={inputName}
                            onChange={onInputName}
                        />
                        <Input
                            placeholder="PHONE"
                            maxLength={13}
                            value={inputPhone}
                            onChange={onInputPhone}
                        />
                        <Button disabled={isPhoneTabDisabled} onClick={findIdByPhone}>
                            Find
                        </Button>
                        <Space height={5} />
                        <Text
                            alignSelf="center"
                            fontWeight="bold"
                            fontSize="24px"
                            color={resultMessage.includes("Your ID") ? "" : "error"}
                        >
                            {resultMessage}
                        </Text>
                        <Space height={5} />
                    </FlexBox>
                </>
            ),
        },
        {
            label: "EMAIL",
            content: (
                <>
                    <FlexBox gap="8px">
                        <Space height={10} />
                        <Input
                            placeholder="NAME"
                            maxLength={16}
                            value={inputName}
                            onChange={onInputName}
                        />
                        <Input
                            placeholder="EMAIL"
                            maxLength={40}
                            value={inputEmail}
                            onChange={onInputEmail}
                        />
                        <Button disabled={isEmailTabDisabled} onClick={findIdByEmail}>
                            Find
                        </Button>
                        <Space height={5} />
                        <Text
                            alignSelf="center"
                            fontWeight="bold"
                            fontSize="24px"
                            color={resultMessage.includes("Your ID") ? "" : "error"}
                        >
                            {resultMessage}
                        </Text>
                        <Space height={5} />
                    </FlexBox>
                </>
            ),
        },
    ];

    return (
        <>
            <Page>
                <FlexBox>
                    <FlexBox direction="row" gap="8px">
                        <IconButton icon={<FaArrowLeft />} onClick={() => navigate(-1)} />
                        <Title>FIND ID</Title>
                    </FlexBox>
                    <TabCard tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                </FlexBox>
            </Page>
        </>
    );
}

export default FindId;
