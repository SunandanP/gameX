import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <>
      <Card
        borderRadius={10}
        overflow={"hidden"}
        shadow={"xl"}
        height={"450px"}
      >
        <Skeleton height={"350px"}></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </>
  );
}
export default GameCardSkeleton;
