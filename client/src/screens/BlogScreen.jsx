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
        <p>The Actual Component</p>
      )}
    </VStack>
  );
};

export default BlogScreen;
