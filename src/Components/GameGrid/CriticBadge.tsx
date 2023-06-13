import { Badge, Text } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

function CriticBadge({ metacritic }: Props) {
  const colorMap = (num: number) => {
    if (num > 80) {
      return "green";
    } else if (num > 50) {
      return "yellow";
    } else if (num > 30) {
      return "red";
    } else {
      return "red";
    }
  };

  return (
    <>
      <Badge
        fontSize={17}
        paddingX={3}
        paddingY={2}
        borderRadius={10}
        colorScheme={colorMap(metacritic)}
      >
        {metacritic}
      </Badge>
    </>
  );
}

export default CriticBadge;
