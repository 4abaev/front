'use client'

import {useState} from "react";
import {Box, Flex, Heading} from "@chakra-ui/react";
import WebsiteInput from "@/components/websiteInput";
import ListItem from "@/components/ListItem";

export interface IFiles {
    jsFiles: string[];
    cssFiles: string[];
}

function GetAssetsPage() {
    const [files, setFiles] = useState<IFiles | null>(null);

    return (
        <Flex w={['320px', '400px', '650px', '991px', '1200px']} flexDir={'column'} gap={4}>
            <WebsiteInput setFiles={setFiles}/>
            {files?.jsFiles.length ?
                <Box m={4}>
                    <Heading>JS файлы</Heading>
                    <ListItem items={files?.jsFiles}/>
                </Box> : null
            }

            {files?.cssFiles.length ?
                <Box m={4}>
                    <Heading>CSS файлы</Heading>
                    <ListItem items={files?.cssFiles}/>
                </Box> : null
            }

        </Flex>
    )
}

export default GetAssetsPage;
