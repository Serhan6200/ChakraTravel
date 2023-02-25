import {
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
  Spinner,
  Alert,
  Image,
  Heading,
  Divider,
  Link,
  Spacer,
  Text,
  Flex,
  Box,
  VStack,
  Button,
} from "@chakra-ui/react";
import { Link as ReactLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogPostByCategory } from "../redux/actions/blogPostActions";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const BlogScreen = () => {
  const { category } = useParams();
  const blogPostInfo = useSelector((state) => state.blogPosts);
  const { blogPosts, loading, error } = blogPostInfo;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogPostByCategory(category, pageItems));
    window.scroll(0, 0);
  });
  return (
    <VStack spacing="30px" minHeight="100vh">
      <Heading fontSize="5xl" mb="16">
        {pageTitle}
      </Heading>
      {loading ? (
        <Stack direction="row" spacing="4">
          <Spinner thickness="2px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl"></Spinner>
        </Stack>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>We are Sorry!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        <>
          <Heading>{category.charAt(0).toUpperCase() + category.slice(1)} Blogs</Heading>
          {blogPosts.map((item) => (
            <Box key={item.id} maxW={{ base: "3xl", lg: "7xl" }} px={{ base: "6", md: "8", lg: "20" }} py="6">
              <Stack direction={{ base: "column", lg: "row" }} spacing="7">
                <Image src={item.image} min={{ lg: "400px" }} maxH="280px" loading={<Spinner />} fit="cover"></Image>
              </Stack>
            </Box>
          ))}
        </>
      )}
    </VStack>
  );
};

export default BlogScreen;
