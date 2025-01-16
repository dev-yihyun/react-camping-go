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

function FindId() {
    const tabs = [
        {
            label: "PHONE",
            content: (
                <>
                    <FlexBox gap="8px">
                        <Space height={10} />
                        <Input placeholder="NAME" />
                        <Input placeholder="PHONE" />
                        <Button>Find</Button>
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
                        <Input placeholder="NAME" />
                        <Input placeholder="EMAIL" />
                        <Button>Find</Button>
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
                    <TabCard tabs={tabs} />
                </FlexBox>
            </Page>
        </>
    );
}

export default FindId;
