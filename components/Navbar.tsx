'use client'
import { Button, Flex } from '@chakra-ui/react';
import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <Flex
        justifyContent="space-between"
        alignItems="center"
        px="2rem"
        py="1rem"
        className={styles.navbar}
    >
        <Image
            src='/logo.svg'
            alt='logo'
            width={60}
            height={46}
            className='object-contain'
        />
        <Button colorScheme='messenger'>
            Connexion
        </Button>
    </Flex>
  )
}

export default Navbar