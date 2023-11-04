'use client'

import {Dispatch, SetStateAction, useState} from "react";
import {Select, Button, Input, Box, Flex} from "@chakra-ui/react";
import {getAssets} from "@/api/parserApi";
import {IFiles} from "@/components/getAssetsPage";

const websiteOptions: string[] = [
    "https://www.youtube.com/",
    "https://showchinese.ru",
    "https://music.yandex.ru",
];

function WebsiteInput({setFiles}: {setFiles: Dispatch<SetStateAction<IFiles | null>>}) {
    const [selectedWebsite, setSelectedWebsite] = useState<string>("");
    const [customWebsite, setCustomWebsite] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedWebsite(event.target.value);
        setCustomWebsite("");
    };

    const handleCustomWebsiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedWebsite("");
        setCustomWebsite(event.target.value);
    };

    const handleSubmit = async (url: string) => {
        setIsLoading(true);
        const data = await getAssets(url);
        setFiles(data);
        setIsLoading(false);
    }

    return (
        <Flex flexDir={'column'} gap={4} alignItems={'center'}>
            <Select
                placeholder="Выберите сайт"
                value={selectedWebsite}
                onChange={handleSelectChange}
            >
                {websiteOptions.map((website) => (
                    <option key={website} value={website}>
                        {website}
                    </option>
                ))}
            </Select>
            <Input
                placeholder="Или введите свой сайт"
                value={customWebsite}
                onChange={handleCustomWebsiteChange}
            />
            <Button isLoading={isLoading} colorScheme="teal" onClick={() => handleSubmit(selectedWebsite || customWebsite)}>
                Получить список файлов
            </Button>
        </Flex>
    );
}

export default WebsiteInput;
