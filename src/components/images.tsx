// filepath: c:\Users\chris\Desktop\Work\code\portfolio V2\portfolio\src\components\CustomImage.tsx
import Image, { ImageProps } from "next/image";

export default function Images(props: ImageProps) {
    return <Image {...props} layout="responsive" />;
}