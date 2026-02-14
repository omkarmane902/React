import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrolling = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchApi = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );

    if (res.data.length === 0) {
      setHasMore(false);
      return;
    }

    setPosts([...posts, ...res.data]);
    setPage(page + 1);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchApi}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p style={{ textAlign: "center" }}>No more data</p>}
    >
      {posts.map((post) => (
        <div
          key={`${post.id} - ${Math.random()}`}
          style={{ padding: "20px", borderBottom: "1px solid gray" }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteScrolling;
