import React, { useState, useCallback, useMemo } from 'react';
import PageLayout from '@site/src/components/PageLayout';

interface ItemGridPageProps<T> {
  title: string;
  description: string;
  sectionId: string;
  heading: string;
  headingDescription?: string;
  items: T[];
  renderItem: (item: T, openModal: (item: T) => void) => React.ReactNode;
  renderModal: (
    item: T | null,
    isVisible: boolean,
    closeModal: () => void
  ) => React.ReactNode;
}

/**
 * Generic Grid Page Component
 * Handles displaying a grid of items and opening a modal for details.
 */
export default function ItemGridPage<T>({
  title,
  description,
  sectionId,
  heading,
  headingDescription,
  items,
  renderItem,
  renderModal,
}: ItemGridPageProps<T>) {
  const [selectedItem, setSelectedItem] = useState<T | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = useCallback((item: T) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedItem(null);
    setIsModalVisible(false);
  }, []);

  const itemBlocks = useMemo(
    () => items.map((item) => renderItem(item, openModal)),
    [items, openModal, renderItem]
  );

  return (
    <PageLayout
      title={title}
      description={description}
      sectionId={sectionId}
      heading={heading}
      headingDescription={headingDescription}
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {itemBlocks}
      </div>
      {renderModal(selectedItem, isModalVisible, closeModal)}
    </PageLayout>
  );
}
