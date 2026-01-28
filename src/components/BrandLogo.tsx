import React from 'react';

interface BrandLogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
    const sizeClasses = {
        sm: 'h-6',
        md: 'h-8 md:h-10',
        lg: 'h-10 md:h-12',
        xl: 'h-12 md:h-16'
    };

    return (
        <div className={`inline-flex items-center ${className}`}>
            <img
                src="/Title_Image-removebg-preview.png"
                alt="InviteEase"
                className={`${sizeClasses[size]} w-auto object-contain`}
            />
        </div>
    );
};

export default BrandLogo;
