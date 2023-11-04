'use client'

import { UnorderedList, ListItem as ChakraListItem } from "@chakra-ui/react";

interface ListItemProps {
    items: string[];
}

const ListItem: React.FC<ListItemProps> = ({ items }) => {
    return (
        <UnorderedList>
            {items.map((item, index) => (
                <ChakraListItem key={index}>{item}</ChakraListItem>
            ))}
        </UnorderedList>
    );
};

export default ListItem