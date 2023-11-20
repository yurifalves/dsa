#include <stdio.h>
#include <stdlib.h>

typedef struct node {
    int val;
    struct node* next;
} node_t;


void printList(node_t* head);
void addNodeToEnd(node_t* head, int val);
void addNodeToBeginning(node_t** head, int val);
int removeFirstNode(node_t** head);
int removeLastNode(node_t* head);
int removeNodeByIndex(node_t** head, int n);
void removeNodeByValue(node_t** head, int val);
void deleteList(node_t* head);

int main() {
    node_t* head = NULL;
    head = (node_t*)malloc(sizeof(node_t));
    if (head == NULL) {
        return 1;
    }
    head->val = 888;
    head->next = NULL;
    
    addNodeToEnd(head, 1);
    addNodeToEnd(head, 2);
    
    printList(head);
    
    addNodeToBeginning(&head, 77);
    
    printList(head);
    
    
    removeLastNode(head);
    printList(head);
    
    removeNodeByValue(&head, 888);
    printList(head);
    
    deleteList(head);

    return 0;
}



void printList(node_t* head) {
    int numberOfItems = 0;
    node_t* current = head;

    printf("{");
    while (current != NULL) {
        printf("%d", current->val);
        current = current->next;
        if (current != NULL) {
            printf(", ");
        }
        numberOfItems++;
    }
    printf("} (%d)\n", numberOfItems);
}

void addNodeToEnd(node_t* head, int val) {
    node_t* current = head;
    while (current->next != NULL) {
        current = current->next;
    }

    /* now we can add a new variable */
    current->next = (node_t*)malloc(sizeof(node_t));
    current->next->val = val;
    current->next->next = NULL;
}

void addNodeToBeginning(node_t** head, int val) {
    node_t* newNode;
    newNode = (node_t*)malloc(sizeof(node_t));
    newNode->val = val;
    newNode->next = *head;
    *head = newNode;
}

int removeFirstNode(node_t** head) {
    int retval = -1;
    if (*head == NULL) {
        return retval;
    }

    node_t* nextNode = (*head)->next;
    retval = (*head)->val;
    free(*head);
    *head = nextNode;

    return retval;
}

int removeLastNode(node_t* head) {
    int retval = -1;
    /* if there is only one item in the list, remove it */
    if (head->next == NULL) {
        retval = head->val;
        free(head);
        return retval;
    }

    /* get to the second to last node in the list */
    node_t* current = head;
    while (current->next->next != NULL) {
        current = current->next;
    }

    /* now current points to the second to last item of the list, so let's remove current->next */
    retval = current->next->val;
    free(current->next);
    current->next = NULL;
    return retval;
}

int removeNodeByIndex(node_t** head, int n) {
    int retval = -1;
    node_t* current = *head;
    node_t* tempNode = NULL;

    if (n == 0) {
        return removeLastNode(*head);
    }

    for (int i = 0; i < n-1; i++) {
        if (current->next == NULL) {
            return retval;
        }
        current = current->next;
    }

    if (current->next == NULL) {
        return retval;
    }

    tempNode = current->next;
    retval = tempNode->val;
    current->next = tempNode->next;
    free(tempNode);

    return retval;
}

void removeNodeByValue(node_t** head, int val) {
    node_t* current = *head;
    node_t* nodeToRemove;
    
    while (current->next->val != val) {
        current = current->next;
    }
    
    // current aponta para um nó antes do que queremos remover
    nodeToRemove = current->next;
    current->next = nodeToRemove->next;
    
    free(nodeToRemove);
}

void deleteList(node_t* head) {
    node_t* current = head;
    node_t* next = head;

    while (current) {
        next = current->next;
        free(current);
        current = next;
    }
}










