import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../../component/Button/Button";
import IconButton from "../../component/Button/IconButton";
import TabCard from "../../component/Card/TabCard";
import Input from "../../component/Input/Input";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";
import Space from "../../component/Layout/Space";
import Text from "../../component/Text/Text";
import Title from "../../component/Text/Title";
import { formatPhoneNumber } from "../../function/formatPhoneNumber";

function FindId() {
    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [activeTab, setActiveTab] = useState(0);

    const onInputName = (event) => {
        setInputName(event.target.value);
    };

    const onInputPhone = (event) => {
        const formattedValue = formatPhoneNumber(event.target.value);
        setInputPhone(formattedValue);
    };

    const onInputEmail = (event) => {
        setInputEmail(event.target.value);
    };

    // 탭 변경 시 input 상태 초기화
    useEffect(() => {
        setInputName("");
        setInputEmail("");
        setInputPhone("");
    }, [activeTab]);

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
                        <Button
                            disabled={
                                !inputName.trim() ||
                                !inputPhone.trim() ||
                                inputPhone.replace(/\D/g, "").length < 11
                            }
                        >
                            Find
                        </Button>
                        <Space height={5} />
                        <Text alignSelf="center" fontWeight="bold" fontSize="24px">
                            메세지
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
                        <Button disabled={!inputName.trim() || !inputEmail.trim()}>Find</Button>
                        <Space height={5} />
                        <Text alignSelf="center" color="error" fontWeight="bold" fontSize="24px">
                            메세지
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
                        <IconButton icon={<FaArrowLeft />} />
                        <Title>FIND ID</Title>
                    </FlexBox>
                    <TabCard
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab} // activeTab 상태를 TabCard에 전달
                    />
                </FlexBox>
            </Page>
        </>
    );
}

export default FindId;
